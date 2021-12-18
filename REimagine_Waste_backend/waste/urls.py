from django.urls import path
from .views import (getProducts, 
                    getEmployees,
                    add_waste, 
                    add_entree,
                    wasted_product_month,
                    wasted_product_day,
                    wasted_product_period,
                    employee_wasted_products_month,
                    employee_wasted_products_day,
                    employee_wasted_products_period,
                    wasted_products_period,
                    wasted_product_period_per_day,
                    entered_product_period_per_day)

urlpatterns = [
    path('products/', getProducts),
    path('employees/', getEmployees),
    path('add/waste/', add_waste),
    path('add/entree/', add_entree),
    path('wasted/product/month/', wasted_product_month),
    path('wasted/product/day/', wasted_product_day),
    path('wasted/product/period/', wasted_product_period),
    
    path('employee/wasted/products/month/', employee_wasted_products_month),
    path('employee/wasted/products/day/', employee_wasted_products_day),
    path('employee/wasted/products/period/', employee_wasted_products_period),
    path('wasted/products/period/', wasted_products_period),
    
    path('wasted/product/period/days/', wasted_product_period_per_day),
    path('entered/product/period/days/', entered_product_period_per_day)
 
]
