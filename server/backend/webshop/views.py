from django.shortcuts import render
from rest_framework.views import APIView
from .__init__ import serviceInjector as si
from .service import StorageManagementService
from rest_framework.response import Response
from .serializers import *
from django.http import Http404, JsonResponse, HttpResponseBadRequest


class Storage(APIView):
    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request, id):

        if request.method == 'GET':

            storage = self.storage_management_service.get_storage(id)

            print("Storage: ", storage)

            if storage is None:
                return JsonResponse("No storage found", safe=False, status=404)

            serialized_data = StorageSerializer(storage)

            if serialized_data.is_valid:
                return JsonResponse(serialized_data.data, safe=False, status=200)
            return Response("Serialization failed", status=400)


class StorageAll(APIView):
    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self):

        all_storages = self.storage_management_service.get_all_storages()
        if all_storages is None:
            return JsonResponse("No storage found", safe=False, status=404)
        serialized_data = StorageSerializer(all_storages, many=True)
        if serialized_data.is_valid:
            return JsonResponse(serialized_data.data, safe=False, status=200)
        return Response("Serialization failed", status=400)


class StorageValue(APIView):
    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request):

        if request.method == 'GET':

            id = request.data.get("id")


class City(APIView):
    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request):

        if request.method == 'GET':

            id = request.data.get("id")

            city = self.storage_management_service.get_city(id)

            if city is None:
                return JsonResponse("City not found", safe=False, status=404)

            serialized_data = CitySerializer(city)

            if serialized_data.is_valid:
                return JsonResponse(serialized_data.data, safe=False, status=200)
            return Response("Serialization failed", status=400)


class Transactions(APIView):
    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, id):

        all_transactions = self.storage_management_service.get_all_transactions()
        if all_transactions is None:
            return JsonResponse("No transaction found", safe=False, status=404)
        serialized_data = TransactionSerializer(all_transactions, many=True)
        if serialized_data.is_valid:
            return JsonResponse(serialized_data.data, safe=False, status=200)
        return Response("Serialization failed", status=400)


class TransactionsAll(APIView):
    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request):

        if request.method == 'GET':
            all_storages = self.storage_management_service.get_all_storages()
            if all_storages is None:
                return JsonResponse("No storage found", safe=False, status=404)
            serialized_data = StorageSerializer(all_storages, many=True)
            if serialized_data.is_valid:
                return JsonResponse(serialized_data.data, safe=False, status=200)
            return Response("Serialization failed", status=400)

    def post(self, request):

        id = request.data.get("id")

        storage = self.storage_management_service.get_storage(
            id=id)

        if storage is None:
            return JsonResponse("Storage not found", safe=False, status=404)

        else:

            amount = request.data.get("amount")
            operation = request.data.get("operation")

            if operation == "Withdraw" and amount > storage.amount:
                return JsonResponse("Not enough articles in the storage", safe=False, status=400)

            transaction = self.storage_management_service.update_storage(
                id, amount, operation)

            serialized_data = TransactionSerializer(transaction)

            return JsonResponse(serialized_data.data, status=200)
