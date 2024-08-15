
from django.urls import path
from .views import leave_feedback, view_feedback

urlpatterns = [
    path('leave-feedback/', leave_feedback, name='leave_feedback'),
    path('view-feedback/', view_feedback, name='view_feedback'),
]


