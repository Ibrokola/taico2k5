from django.shortcuts import render

def homepage(request):
    context ={}
    template = "home/home_visitor.html"
    return render(request, template, context)