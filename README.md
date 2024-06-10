#Virtual Try-On for Products

![Implementation of the Project](https://drive.google.com/file/d/1fgF3xOsGL9bmAqsCVIecRaYBXr_faOV6/view?usp=sharing)

Image visual try-on aims at transferring a target clothes image onto a reference person, and has become a hot topic in recent years. Prior works usually focus on preserving the character of a clothes image (e.g. texture, logo, embroidery) when warping it to arbitrary human pose. However, it remains a big challenge to generate photo-realistic try-on images when large occlusions and human poses are presented in the reference person. 

This is a topic which will include Augmented Reality(AR) combined with Machine Learning(ML) to detect body movements. There are many ways to tackle this issue. One of them being:

1. A semantic layout generation module utilizes semantic segmentation of the reference image to progressively predict the desired semantic layout after try-on.

2. A clothes warping module warps clothes image according to the generated semantic layout, where a second-order difference constraint is introduced to stabilize the warping process during training. 

3. An inpainting module for content fusion integrates all information (e.g. reference image, semantic layout, warped clothes) to adaptively produce each semantic part of human body. 

This is one of the ways in which this problem can be tackled but not the only one. Applicants are encouraged to come up with your own solutions and steps to complete this project which could be more efficient and unique. 

### References
[1] [Human Localization in Real-Time Video](https://drive.google.com/file/d/1AcBzRNdpn2sMVZ81QY057rZrboTo2ZMy/view?usp=sharing
)

[2] [Virtual Try-On Implementation](https://drive.google.com/file/d/13_5T6FjZ-lgoM12CvfxSDrWREuEAgN53/view?usp=sharing
)

### Examples
![Image1](https://drive.google.com/uc?id=1fgF3xOsGL9bmAqsCVIecRaYBXr_faOV6)

![Image2](https://drive.google.com/uc?id=1A7AFluZUvBHL1dVuWjiFuiTOyp7VCWde)

**Pre-requisites:** C++ Programming, Python Programming, Basic Understanding of Computer Vision

**Difficulty:** Hard

**Mentors:** Mrudul Pawar

**Domains:** Computer Vision, Deep Learning, Augmented Reality
