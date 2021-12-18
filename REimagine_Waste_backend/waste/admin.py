from django.contrib import admin
from .models import Employee, Product, Waste, Entries
# Register your models here.
admin.site.register(Employee)
admin.site.register(Product)
admin.site.register(Waste)
admin.site.register(Entries)
