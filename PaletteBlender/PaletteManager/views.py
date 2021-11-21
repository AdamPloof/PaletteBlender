from django.shortcuts import render

def index(request):
    context = {
        'title': 'Palette Blender',
    }

    return render(request, "index.html", context)
