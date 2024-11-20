from django.urls import path
from .views import ArticleList, ArticleDetail

urlpatterns = [
    path('articles/', ArticleList.as_view(), name='articles'),
    path('articles/<int:id>/', ArticleDetail.as_view(), name='article'),
]
