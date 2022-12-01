---
id: folium
slug: /folium
title: foliumの使い方
description: foliumの使い方について
sidebar_position: 1
sidebar_label: folium
tags:
  - gis
keywords:
  - gis
---

## Foliumの使い方
### カテゴリーごとにラインを色分け
#### 完成コード
```python
import folium
colors = ['red', 'blue', 'green', 'purple', 'orange', 'darkred', 'lightred', 'beige', 'darkblue,' 'darkgreen', 'cadetblue', 'darkpurple', 'white', 'pink', 'lightblue', 'lightgreen', 'gray', 'black', 'lightgray']
m = folium.Map(location=[37.5, 140.4], zoom_start=10)
for _, r in gdf.iterrows():
    loca = [(float(r['dwLatitude']),float(r['dwLongitude'])),(float(r['upLatitude']),float(r['upLongitude']))]
    line = folium.vector_layers.PolyLine(locations=loca,color=colors[int(r['month'])],weight=1)
    m.add_child(line)
m
```
#### 前半パート
```python
import folium
colors = ['red', 'blue', 'green', 'purple', 'orange', 'darkred', 'lightred', 'beige', 'darkblue,' 'darkgreen', 'cadetblue', 'darkpurple', 'white', 'pink', 'lightblue', 'lightgreen', 'gray', 'black', 'lightgray']
m = folium.Map(location=[37.5, 140.4], zoom_start=10)
```
- foliumをimport
- colorsにて使用カラーコードを指定。foliumで使用できるカラーコードは決まっているため上記の色を使用すること。一部16進数でカラーコードを指定できる関数も存在するが統一のためここでは使用しない。
- 変数mにfolium.Mapを定義。表示する地図の中心locationとズーム倍率のzoom_startを設定すれば十分。
#### 後半パート
```python
for _, r in gdf.iterrows():
    loca = [(float(r['dwLatitude']),float(r['dwLongitude'])),(float(r['upLatitude']),float(r['upLongitude']))]
    line = folium.vector_layers.PolyLine(locations=loca,color=colors[int(r['month'])],weight=1)
    m.add_child(line)
m
```
- folium.vector_layers.PolyLineを用いて地図m上に表示するラインを定義する。
    - location - [(ポイントAの座標), (ポイントBの座標)] ポイントは(緯度、経度)の順。
    - color - colorsからカラーを選んで設定する。
    - weight - 1でOK。
- m.add_child(line)で地図m上にラインを追加する。

### 参考資料
[Foliumドキュメント](https://python-visualization.github.io/folium/).  
PolyLineはドキュメントvector_layerページを参照。

writer: nakamura