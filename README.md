# REST API fra serversiden

Nå skal vi se på hvordan et REST API ser ut i serverens kode. Vi skal bruke et rammeverk for Python som heter Flask.

I dette repositoriet ligger det et eksempel-prosjekt som implementerer et lignende API som gorest-nettsiden. 

## Avhengigheter og Virtual Environment

Flask er et rammeverk som ikke er inkludert i Python, så derfor må vi installere det. Vi kaller det at koden har en avhengighet ("dependency"). Noen av dere har kanskje installert sånne avhengigheter med `pip`. 

Når man har flere prosjekter på maskinen sin, blir det fort rotete om man skal ha alle avhenighetene for alle prosjekter installert samtidig. Det blir komplisert å holde styr på hvilken kode som trenger hvilken avhengighet, og kanskje noe kode trenger forskjellige versjoner av samme avhengighet!

Det finnes flere verktøy for å håndtere dette problemet i python (og andre programmeringsspråk har egne verktøy). Verktøyet som er innebygget i Python heter "venv", en forkortelse for "virtual environment". Det lager et eget ("virtuelt") python-miljø per prosjekt som kun inneholder akkurat det prosjektet trenger. 

Nå skal vi opprette et venv for dette prosjektet, og installere Flask inn i det miljøet.

### Opprette nytt venv

For å opprette et nytt venv, sender vi bare hvor vi skal plassere det ny venv inn i modulen `venv`. Det enkleste er plassere venv inne i mappen hvor prosjektet ligger. Åpne opp et terminalvindu (enten gjennom vs code eller separat), og dobbelsjekk at den aktive mappen er den vi forventer med `pwd`:

```shell
pwd
```

Hvis mappen er det du forventer (f.eks. Users/andoa027/dev/starter-rest-with-flask) kan vi opprette et nytt venv i nåværende mappe med:
```shell
python3 -m venv venv
```

`venv` står to ganger: første gang fordi vi starter modulen som heter "venv", andre gang fordi vi oppretter et venv som heter "venv".

### Aktivere venv

Hvis du bruker visual stuido code er det mulig at programmet plukker opp venv automatisk. Da skal terminalvindu du åpner i vscode automatisk bruke venv. Hvis ikke kan du kjøre:

```
source venv/bin/activate
```

Lister vi nå ut alle installerte avhengigheter med `pip list` skal vi se en "tom" liste:

```
(venv) ELVNB9571:test-env andoa027$ pip list
Package    Version
---------- -------
pip        20.2.3
setuptools 49.2.1
```

 De to som er der, er verktøyene vi trenger for å installere _andre_ avhengigheter.

### Installere avhengigheter

Nå som vi har aktivert det dedikerte venv for dette prosjektet, kan vi trygt installere avhengighetene uten at det kolliderer med andre prosjekter på datamaskinen.

Istedenfor å installere avhengigheter én og én manuelt, kommer prosjektet med en fil med alle avhengigheter som pip kan lese:

```
pip3 install -r requirements.txt 
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

Legg merke til at det er mer enn bare Flask her. Det er fordi Flask har sine egne avhengigheter (og kanskje noen av dem har sine egne avhengigheter osv.), som pip automatisk installerer sammen med Flask. 

## Starte flask-serveren

Nå som vi har flask installert kan vi starte opp serveren.

```
cd flask-gorest && FLASK_ENV=development flask run
```

Konfigurasjonen `FLASK_ENV=development` gjør at flask-serveren automatisk laster på nytt hver gang vi lagrer endringer i `app.py`.

Flask prøver å starte `app.py` hvis vi ikke spesifiserer navnet på filen.

## GET User

## Oppgave: Implementere GET user

## POST user

## Oppgave: Implementere POST user