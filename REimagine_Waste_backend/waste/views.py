from django.contrib.auth.models import User
from django.db.models.aggregates import Count
from django.db.models.fields import DateField, json
from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core import serializers
from django.db.models import Sum
import datetime
import json
from .models import Employee, Entries, Product, Waste
from .serializer import EmployeeSerializer,EntriesSerializer, ProductSerializer, WasteSerializer
from uuid import UUID


class UUIDEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, UUID):
            # if the obj is uuid, we simply return the value of uuid
            return obj.hex
        return json.JSONEncoder.default(self, obj)


class DateTimeEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()

        return json.JSONEncoder.default(self, o)
# Create your views here.


@api_view(["GET"])
def getProducts(request):
    query_set = Product.objects.all()
    if len(query_set) == 0:
        return
    serializer = ProductSerializer(query_set, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def getEmployees(request):
    query_set = Employee.objects.all()
    if len(query_set) == 0:
        return
    serializer = EmployeeSerializer(query_set, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def add_waste(request):
    data = request.data
    try:
        user = Employee.objects.get(ID=data["user_id"])
        product = Product.objects.get(ID=data["product_id"])
        serializer = WasteSerializer(data=data)
        # new_candidat = Product.objects.create()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,  status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Employee.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except:
        return Response(status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(["POST"])
def add_entree(request):
    data = request.data
    try:
        user = Employee.objects.get(ID=data["user_id"])
        product = Product.objects.get(ID=data["product_id"])
        serializer = EntriesSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,  status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Employee.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except:
        return Response(status=status.HTTP_406_NOT_ACCEPTABLE) 
    

@api_view(["GET"])
def wasted_product_month(request):
    try:
        month = request.GET.get("month")
        year = request.GET.get("year")
        product = request.GET.get("product")
        
        result = Waste.objects.filter(product_id=product,
                                    date__year=year,
                                    date__month=month)\
        .values(
            'user_id'
        ).annotate(
            total_waste= Sum('wasted_kilos')
        ).order_by(
            "user_id"
        )
        
        result_json = json.dumps({"data": list(result)}, cls=UUIDEncoder)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def wasted_product_day(request):
    try:
        day =  request.GET.get("day")
        product = request.GET.get("product")

        result = Waste.objects.filter(product_id=product,
                                      date=day)\
            .values(
            'user_id'
        ).annotate(
            total_waste=Sum('wasted_kilos')
        ).order_by(
            "user_id"
        )
        
        result_json = json.dumps({"data": list(result)}, cls=UUIDEncoder)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["GET"])
def wasted_product_period(request):
    try:
        start_date = request.GET.get("start_date")
        fin_date = request.GET.get("fin_date")
        product = request.GET.get("product")

        result = Waste.objects.filter(product_id=product,
                                      date__gte=start_date,
                                      date__lte=fin_date)\
            .values(
            'user_id'
        ).annotate(
            total_waste=Sum('wasted_kilos')
        ).order_by(
            "user_id"
        )

        result_json = json.dumps({"data": list(result)}, cls=UUIDEncoder)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
        
        
@api_view(["GET"])
def employee_wasted_products_month(request):
    try:
        month = request.GET.get("month")
        year = request.GET.get("year")
        employee = request.GET.get("employee")

        result = Waste.objects.filter(user_id=employee,
                                      date__year=year,
                                      date__month=month)\
            .values(
            'product_id'
        ).annotate(
            total_waste=Sum('wasted_kilos')
        ).order_by(
            "product_id"
        )

        result_json = json.dumps({"data": list(result)}, cls=UUIDEncoder)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def employee_wasted_products_day(request):
    try:
        day = request.GET.get("day")
        employee = request.GET.get("employee")

        result = Waste.objects.filter(user_id=employee,
                                      date=day)\
            .values(
            'product_id'
        ).annotate(
            total_waste=Sum('wasted_kilos')
        ).order_by(
            "product_id"
        )

        result_json = json.dumps({"data": list(result)}, cls=UUIDEncoder)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["GET"])
def employee_wasted_products_period(request):
    try:
        start_date = request.GET.get("start_date")
        fin_date = request.GET.get("fin_date")
        employee = request.GET.get("employee")

        result = Waste.objects.filter(user_id=employee,
                                      date__gte=start_date,
                                      date__lte=fin_date)\
            .values(
            'product_id'
        ).annotate(
            total_waste=Sum('wasted_kilos')
        ).order_by(
            "product_id"
        )

        result_json = json.dumps({"data": list(result)}, cls=UUIDEncoder)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["GET"])
def wasted_products_period(request):
    try:
        start_date = request.GET.get("start_date")
        fin_date = request.GET.get("fin_date")

        result = Waste.objects.filter(date__gte=start_date,
                                      date__lte=fin_date)\
            .values(
            'product_id'
        ).annotate(
            total_waste=Sum('wasted_kilos')
        ).order_by(
            "product_id"
        )

        result_json = json.dumps({"data": list(result)}, cls=UUIDEncoder)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def wasted_product_period_per_day(request):
    try:
        start_date = request.GET.get("start_date")
        fin_date = request.GET.get("fin_date")
        product = request.GET.get("product")

        
        result = Waste.objects.filter(product_id=product,
                                    date__gte=start_date,
                                    date__lte=fin_date)\
            .values(
            'date'
        ).annotate(
            total_waste=Sum('wasted_kilos')
        ).order_by(
            'date' 
        )

        result_json = json.dumps(
            {"data": list(result)}, cls=UUIDEncoder, indent=4, sort_keys=True, default=str)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["GET"])
def entered_product_period_per_day(request):
    try:
        start_date = request.GET.get("start_date")
        fin_date = request.GET.get("fin_date")
        product = request.GET.get("product")

        result = Entries.objects.filter(product_id=product,
                                      date__gte=start_date,
                                      date__lte=fin_date)\
            .values(
            'date'
        ).annotate(
            total_waste=Sum('entered_kilos')
        ).order_by(
            'date'
        )

        result_json = json.dumps(
            {"data": list(result)}, cls=UUIDEncoder, indent=4, sort_keys=True, default=str)
        return HttpResponse(result_json, content_type="application/json")
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
