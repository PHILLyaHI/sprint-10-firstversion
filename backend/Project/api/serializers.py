from rest_framework import serializers
from projectapp.models import Video, Channel
from django.conf import settings


class VideoSerializer(serializers.ModelSerializer):
    channel = serializers.PrimaryKeyRelatedField(queryset=Channel.objects.all(), required=False)
    user = serializers.CharField(source="channel.user.user_name", read_only=True)

    class Meta:
        model = Video
        fields = "__all__"

class UserRegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ('email', 'user_name', 'first_name')
        extra_kwargs = {'password': {'write_only': True}}