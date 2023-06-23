import folium
import numpy as np
from folium.plugins import HeatMap
import pandas as pd

style1 = {'fillColor': 'black', 'color': 'black','fillOpacity': '0'}
geoRJ = 'RJ_Delimitation.txt'

mapa = folium.Map([-22.898754947715943, -43.18071297988286], zoom_start = 9)
folium.GeoJson(geoRJ, style_function=lambda x:style1).add_to(mapa)
dados = pd.read_csv('dados_calor.csv')
HeatMap(dados).add_to(mapa)
mapa.save('index.html')
mapa