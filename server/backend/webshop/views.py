
from rest_framework.views import APIView
from .__init__ import serviceInjector as si
from .service import StorageManagementService
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import authentication_classes
from django.core.exceptions import PermissionDenied
from .serializers import *
from knox.models import AuthToken
from knox.auth import TokenAuthentication
from knox.views import LoginView as KnoxLoginView
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout


class LoginView(KnoxLoginView):

    ## Handles login ##

    permission_classes = []
    authentication_classes = []

    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def post(self, request):

        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            raise AuthenticationFailed

        auth = authenticate(username=username, password=password)
        if auth is None:
            raise AuthenticationFailed

        login(request, auth)

        user = self.storage_management_service.get_user(request.user)
        serialized_user = UserSerializer(user)
        data = {
            "user": serialized_user.data,
            "token": AuthToken.objects.create(auth)[1]
        }
        return JsonResponse(data, safe=False, status=200)


class Logout(APIView):

    def post(self, request):
        logout(request)
        return JsonResponse("User signed out.", safe=False, status=200)


class StorageAll(APIView):

    ## Handles all the storage-based views ##

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request):

        if not request.auth:
            return JsonResponse("You do not have permission to do this", safe=False, status=403)

        all_storages = self.storage_management_service.get_all_storages()
        if all_storages is None:
            return JsonResponse("No storage found", safe=False, status=404)
        serialized_data = StorageSerializer(all_storages, many=True)
        if serialized_data.is_valid:
            return JsonResponse(serialized_data.data, safe=False, status=200)
        return Response("Serialization failed", status=400)


class City(APIView):

    ## Handles all the city-based views  ##

    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request):

        if not request.user.is_authenticated:
            raise PermissionDenied

        if request.method == 'GET':

            id = request.data.get("id")

            city = self.storage_management_service.get_city(id)

            if city is None:
                return JsonResponse("City not found", safe=False, status=404)

            serialized_data = CitySerializer(city)

            if serialized_data.is_valid:
                return JsonResponse(serialized_data.data, safe=False, status=200)
            return Response("Serialization failed", status=400)


class TransactionsAll(APIView):

    ## Handles all the transaction-based views ##

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request):

        if not request.auth:
            return JsonResponse("You do not have permission to do this", safe=False, status=403)

        all_transactions = self.storage_management_service.get_all_transactions()
        if all_transactions is None:
            return JsonResponse("No transaction found", safe=False, status=404)
        serialized_data = TransactionSerializer(all_transactions, many=True)
        if serialized_data.is_valid:
            return JsonResponse(serialized_data.data, safe=False, status=200)
        return Response("Serialization failed", status=400)

    def post(self, request):

        city = request.data.get("city")
        article = request.data.get("article")

        storage = self.storage_management_service.get_storage(
            city, article)

        if storage is None:
            return JsonResponse("Storage not found", safe=False, status=404)

        else:

            amount = int(request.data.get("amount"))
            operation = request.data.get("operation")

            if operation == "Withdraw" and amount > storage.amount:
                return JsonResponse("Not enough articles in the storage", safe=False, status=400)

            transaction = self.storage_management_service.update_storage(
                city, article, amount, operation)

            serialized_data = TransactionSerializer(transaction)

            return JsonResponse(serialized_data.data, status=200)

    def put(self, request, id):

        ## TODO ##

        if request.method == 'PUT':

            new_amount = request.data.get("amount")
            new_date = request.data.get("date")
            transaction = (self.storage_management_service.edit_transaction(
                id, new_amount, new_date))

            serialized_data = TransactionSerializer(transaction)

            if transaction is None:
                JsonResponse("Transaction not found", safe=False, status=404)
            else:
                return JsonResponse(serialized_data.data, safe=False, status=200)

    def delete(self, request, id):

        ## TODO ##

        transaction = self.storage_management_service.get_transaction(id)

        if transaction is None:
            JsonResponse("Transaction not found", safe=False, status=404)

        deleted_transaction = self.storage_management_service.delete_transaction(
            id)

        if deleted_transaction is None:
            return JsonResponse("Error deleting transaction", safe=False, status=400)
        return JsonResponse(safe=False, status=204)
