# feedback/models.py
from django.db import models
from django.conf import settings
from django.utils.translation import gettext as _
from django.contrib.auth.models import User

class BaseFeedback(models.Model):
    rating = models.CharField(max_length=255, choices=settings.FEEDBACK_CHOICES, verbose_name=_('Rating'))
    review = models.TextField(verbose_name=_('Review'))
    time = models.DateTimeField(auto_now_add=True, verbose_name=_('Time'))

    class Meta:
        ordering = ('time',)
        abstract = True

    def __str__(self) -> str:
        return self.review if self.review else 'No review provided'

class Feedback(BaseFeedback):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_('User'))

class AnonymousFeedback(BaseFeedback):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, verbose_name=_('User'))
