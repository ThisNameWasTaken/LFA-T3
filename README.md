[![Build Status](https://travis-ci.org/ThisNameWasTaken/LFA-T3.svg?branch=master)](https://travis-ci.org/ThisNameWasTaken/LFA-T2)
# LFA
Limbaje formale si automate 

#### Tema 3 
_5\. Algoritmul CYK (verificare generare cuvant de catre gramatica in FNC)._

__Input:__ O gramatica in FNC oarecare si un cuvant. <br/>
__Output:__ matricea triunghiulara rezultata in urma aplicarii algoritmului CYK si un raspuns boolean care indica daca sirul dat ca input e acceptat de gramatica sau nu.

Exemplu:

__G:__ <br/>
&nbsp;S → AB | BC <br/>
&nbsp;A → BA | a <br/>
&nbsp;B → CC | b <br/>
&nbsp;C → AB | a <br/>

w = baaba <br/>

Solutie: 

<table style="text-align:center">
  <tr>
    <td>{S, A, C}</td>
  </tr>
  <tr>
    <td>  -</td>
    <td>{S, A, C}</td>
  </tr>
  <tr>
    <td>  -</td>
    <td>  {B}</td> 
    <td>  {B}</td>
  </tr>
  <tr>
    <td> {S, A}</td>
    <td>  {B}</td> 
    <td> {S, C}</td>
    <td> {S, A}</td>
  </tr>
  <tr>
    <td>  {B}</td>
    <td> {A, C}</td> 
    <td> {A, C}</td>
    <td>  {B}</td>
    <td> {A, C}</td>
  </tr>
  <tr>
    <th>b</th>
    <th>a</th> 
    <th>a</th>
    <th>b</th>
    <th>a</th>
  </tr>
</table>

# 
Verificati daca aveti instalat [NodeJS](https://nodejs.org/en/) executand intr-un terminal ```node -v```. <br/>
Instalati toate modulele executand ```npm install```. <br/>
Rulati testele executand ```npm test```.