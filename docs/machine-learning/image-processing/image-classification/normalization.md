---
id: regularization
slug: /reguralization
title: 正則化
description: この記事では正則化について説明します。
sidebar_position: 2
sidebar_label: 正則化
tags:
  - machine learning
  - deep learning
  - image processing
keywords:
  - machine learning
  - deep learning
  - image processing
---

# 正則化

## 正則化とは・・・学習結果として有り得なさそうなモデルを学習の候補から外すこと

- 学習データに対する誤差を最小にするよう学習するとモデルが過適合してしまい、正則化によるペナルティは大きくなる(画像下)
- 誤差と正則化によるペナルティを同時に評価することによってテストデータに対して、高性能なモデルを得ることができる。

![reguralization_img001](/img/regularization.jpg)

## 代表的な正則化
- #### データ拡張

- #### Weight decay

- #### Spectral normalization

- #### Label smoothing

- #### Drop out

- #### Batch normalization
