from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UserWalletViewSet, PaymentMethodViewSet, DriverWalletViewSet

router = DefaultRouter()
router.register("driverwallet", DriverWalletViewSet)
router.register("userwallet", UserWalletViewSet)
router.register("paymentmethod", PaymentMethodViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
