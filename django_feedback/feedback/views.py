from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import FeedbackForm, AnonymousFeedbackForm
from .models import Feedback, AnonymousFeedback


def leave_feedback(request):
    form_class = FeedbackForm if request.user.is_authenticated else AnonymousFeedbackForm
    form = form_class(request.POST or None)

    if request.method == 'POST':
        if form.is_valid():
            feedback = form.save(commit=False)
            feedback.user = request.user if request.user.is_authenticated else None
            feedback.save()
            messages.success(request, 'Your feedback has been submitted successfully!')
            return redirect('view_feedback')  

    return render(request, 'feedback/feedback_form.html', {'form': form})

def view_feedback(request):
    feedback_list = Feedback.objects.all().order_by('-time')
    anonymous_feedback_list = AnonymousFeedback.objects.all().order_by('-time')
    return render(request, 'feedback/view_feedback.html', {
        'feedback_list': feedback_list,
        'anonymous_feedback_list': anonymous_feedback_list
    })
