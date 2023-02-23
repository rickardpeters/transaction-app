from rest_framework.views import APIView
from __init__ import serviceInjector as si
from service import StorageManagementService


class Storage(APIView):
    @si.inject
    def __init__(self, _deps, *args):
        self.storage_management_service: StorageManagementService = (
            _deps['StorageManagementService']())

    def get(self, request, city, article_name):

        if request.method == 'GET':

            if city != None and article_name != None:
                storage = self.storage_management_service.get_storage(
                    city, article_name)
