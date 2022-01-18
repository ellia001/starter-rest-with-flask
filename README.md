# REST API fra serversiden

Nå skal vi se på hvordan et REST API ser ut i serverens kode. Vi skal bruke et rammeverk for Python som heter Flask.

I dette repositoriet ligger det et eksempel-prosjekt som implementerer et lignende API som gorest-nettsiden. 


## Avhengigheter og Virual Environment

Flask er et rammeverk som ikke er inkludert i Python, så derfor må vi installere det. Vi kaller ofte at koden har en avhengighet. Noen av dere har kanskje installert sånne avhengigheter med `pip`. 

Når man har flere prosjekter på maskinen sin, blir det fort rotete om man skal ha alle avhenighetene for alle prosjekter installert samtidig. Det blir komplisert å holde styr på hvilken kode som trenger hvilken avhengighet, og kanskje noe kode trenger forskjellige versjoner av samme avhengighet!

For å holde styr på dette i Python bruker vi noe som heter "virtual environments", eller forkortet "venv". Det lager et eget python-miljø per prosjekt som kun inneholder akkurat det prosjektet trenger.

Nå skal vi opprette et venv for dette prosjektet, og installere Flask inn i det miljøet.

### Sjekke at venv er installert

For å håndtere venv bruker vi et verktøy som også heter `venv`. Sjekk at `venv` er installert med:
```
python3 -m venv -h
```

Hvis du da får 

```shell
usage: venv [-h] [--system-site-packages] [--symlinks | --copies] [--clear] [--upgrade] [--without-pip]
            [--prompt PROMPT] [--upgrade-deps]
            ENV_DIR [ENV_DIR ...]

Creates virtual Python environments in one or more target directories.
```
Osv. er venv

TODO installere på en måte som gir `virtualenv`?

### Opprette nytt venv

For å opprette et nytt venv, bruker vi kommandoen `venv` (TODO har alle venv installert?), sammen med plasseringen hvor vi skal plassere det nye miljøet. Det enkleste er å bare legge venv inne i mappen hvor prosjektet ligger. Åpne opp et terminalvindu (enten gjennom vs code eller separat), og dobbelsjekk at den aktive mappen er den vi forventer med `pwd`:

```shell
pwd
```

Hvis mappen er det du forventer (f.eks. Users/andoa027/dev/starter-rest-with-flask) kan vi opprette et nytt venv i nåværende mappe med:
```shell
python3 -m venv venv
```

`venv` står to ganger: første gang fordi vi starter kommandoen som heter "venv", andre gang fordi vi oppretter et venv som heter "venv".

### Aktivere venv

Hvis du bruker visual stuido code er det mulig at programmet plukker opp venv automatisk. Da skal terminalvindu du åpner i vscode automatisk bruke venv. Hvis ikke kan du kjøre:

```
source venv/bin/activate
```

Hvis du kjører kommando for at pip skal svare ut alle avhengighetene skal du da se denne listen:
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

Du kan også se navnet på det aktiverte venv  `(venv)` helt til venstre i terminalen.

Legg merke til at det er mer enn bare Flask her. Det er fordi Flask har sine egne avhengigheter igjen (og kanskje noen av dem har sine egne avhengigheter osv.), som pip automatisk installerer sammen med Flask. 

## Starte flask-serveren

Nå som vi har flask installert kan vi starte opp serveren.

```
FLASK_ENV=development flask run
```

## GET User

## Oppgave: Implementere GET user

## POST user

## Oppgave: Implementere POST user