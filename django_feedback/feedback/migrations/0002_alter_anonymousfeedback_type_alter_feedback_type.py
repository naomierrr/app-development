# Generated by Django 5.1 on 2024-08-14 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='anonymousfeedback',
            name='type',
            field=models.CharField(choices=[('awesome', 'Awesome'), ('average', 'Average'), ('worst', 'Worst')], max_length=255, verbose_name='Type'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='type',
            field=models.CharField(choices=[('awesome', 'Awesome'), ('average', 'Average'), ('worst', 'Worst')], max_length=255, verbose_name='Type'),
        ),
    ]
