from django.contrib import admin
from .models import Feedback, AnonymousFeedback

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('user', 'rating', 'review', 'time')
    search_fields = ('user__username', 'rating', 'review')

@admin.register(AnonymousFeedback)
class AnonymousFeedbackAdmin(admin.ModelAdmin):
    list_display = ('rating', 'review', 'time')
    search_fields = ('rating', 'review')

