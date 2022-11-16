from django.shortcuts import render
import pandas as pd
import json 
# Create your views here.
def subasta1(request): 

    
    df_cuadros = pd.read_excel('subasta_mayu1.xlsx')
    lista_cuadros = df_cuadros.values.tolist()

    context = {"cuadros":json.dumps(lista_cuadros)}
    print(context)

    return render(request, 'index.html', context)

def subasta2(request): 

    
    df_cuadros = pd.read_excel('subasta_mayu2.xlsx')
    lista_cuadros = df_cuadros.values.tolist()

    context = {"cuadros":json.dumps(lista_cuadros)}
    print(context)

    return render(request, 'index.html', context)

def subasta3(request): 

    
    df_cuadros = pd.read_excel('subasta_mayu3.xlsx')
    lista_cuadros = df_cuadros.values.tolist()

    context = {"cuadros":json.dumps(lista_cuadros)}
    print(context)

    return render(request, 'index.html', context)

def  image(request):
    src = '../media/' + request.path + '.JPG'

    return(src)