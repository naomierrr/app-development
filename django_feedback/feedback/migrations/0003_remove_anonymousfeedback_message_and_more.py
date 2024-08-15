# Generated by Django 5.1 on 2024-08-14 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0002_alter_anonymousfeedback_type_alter_feedback_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='anonymousfeedback',
            name='message',
        ),
        migrations.RemoveField(
            model_name='anonymousfeedback',
            name='type',
        ),
        migrations.RemoveField(
            model_name='feedback',
            name='message',
        ),
        migrations.RemoveField(
            model_name='feedback',
            name='type',
        ),
        migrations.AddField(
            model_name='anonymousfeedback',
            name='rating',
            field=models.CharField(choices=[('awesome', 'Awesome'), ('average', 'Average'), ('horrible', 'Horrible')], default='Unknown', max_length=255, verbose_name='Rating'),
        ),
        migrations.AddField(
            model_name='anonymousfeedback',
            name='review',
            field=models.TextField(default='No review provided', verbose_name='Review'),
        ),
        migrations.AddField(
            model_name='feedback',
            name='rating',
            field=models.CharField(choices=[('awesome', 'Awesome'), ('average', 'Average'), ('horrible', 'Horrible')], default='Unknown', max_length=255, verbose_name='Rating'),
        ),
        migrations.AddField(
            model_name='feedback',
            name='review',
            field=models.TextField(default='No review provided', verbose_name='Review'),
        ),
    ]
