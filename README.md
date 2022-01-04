# REST API fra serversiden

Nå skal vi se på hvordan et REST API ser ut i serverens kode. Vi skal bruke et rammeverk for Python som heter Flask.

I dette repositoriet ligger det et eksempel-prosjekt som implementerer et lignende API som gorest-nettsiden. 


## VENV

TODO intro til venv

Hvis du bruker visual stuido code er det mulig at programmet plukker opp venv automatisk. Da skal terminalvindu du åpner i vscode automatisk bruker venv. Hvis ikke kan du kjøre:

```
source venv/bin/activate
```

Hvis du kjører kommando for å liste ut alle avhengighetene i python skal du da se denne listen:
```
(venv) ELVNB9571:starter-rest-with-flask andoa027$ pip3 list
Package      Version
------------ -------
click        8.0.3
Flask        2.0.2
itsdangerous 2.0.1
Jinja2       3.0.3
MarkupSafe   2.0.1
pip          20.2.3
setuptools   49.2.1
Werkzeug     2.0.2
```