from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    content = models.TextField()
    author = models.CharField(max_length=100, db_index=True)
    category= models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='images/', blank=True)

    def __str__(self):
        return self.title