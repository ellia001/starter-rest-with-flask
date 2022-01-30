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

Først inn i mappen hvor koden ligger:

```
cd flask-gorest
```

Så kan vi starte serveren med `run` kommandoen:

```
FLASK_ENV=development flask run
```

Konfigurasjonen `FLASK_ENV=development` gjør at flask-serveren automatisk laster på nytt hver gang vi lagrer endringer i `app.py`. Vi trenger ikke spesifisere at serveren heter app.py, fordi Flask leter etter en fil som heter akkurat `app.py` hvis ikke spesifiserer noe.

Vi får da se i terminalen:
```
ELVNB9571:flask-gorest andoa027$ FLASK_ENV=development flask run
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 123-871-371
```

Trykker vi på lenken etter "Running on" kommer vi til nettadressen hvor serveren kjører, og vi får se nettside-klienten.

Her kan vi merke oss at vi skal bruke serveren til to ting: servere nettsiden (html+javascript) _og_ svare på REST APIet. Disse to oppgavene _må_ ikke utføres av samme server (men som noen kanskje har erfart får man fort problemer med CORS om man ikke gjør det). I forrige oppgave hadde vi ikke `index.html` i noen server, og gjorde kall mot gorest.co.in. Vi kunne like godt servet `index.html` fra en annen server, og fortsatt gjort kall mot gorest.co.in.

### Sjekk at serveren kjører

Nettsiden er basert på klienten fra klient-oppgaven. Den har implementert rest-kall mot serveren for GET og POST for både api/users og api/posts. 

(Funfact: Det er blitt løst på en måte som bruker samme javascript for alle GET og alle POST, ta gjerne en titt på det, men det er ikke poenget med denne oppgaven.)

Gå inn på serveren og trykk på knappene for å se hvordan det virker. Se i terminalen hvor du har startet serveren hva som skjer på serveren.


## Vi ser på server implementasjonen

Kallene går nå fra nettsiden til flask-serveren. Hvis du åpner filen `app.py` kan du se hvordan dette er implementert.

### Statiske filer som HTML og Javascript

Som sagt er det serveren som sender selve nettsiden til nettleseren. Når du åpner http://127.0.0.1:5000/ i nettleseren din går det GET til "/" på serveren.

`@app.route()` er kommandoen i Flask som knytter urlen på Requesten fra nettleseren til hvilken metode som skal kjøres. Så `@app.route('/')` knytter '/', altså ingen url, til metoden `_home()`. Den metoden bruker funksjonen `send_from_directory()` til å sende filen `index.html` fra mappen som heter "static" (variabelen `static` er definert i toppen av filen). Det er dette som gjør at vi får ser nettsiden når vi åpner adressen serveren kjører på.

Når vi skriver <> inne i en route, som i `@app.route('/<path:path>')`, kan vi bruke verdier fra urlen i metoden. Så i metoden `_static(path)` tar vi urlen som kommer inn, f.eks. '/index.js', og leter etter en fil med det navnet inne i static-mappen. Det betyr at vi ikke trenger en egen route for '/index.js', og hvis vi legger til en style.css-fil i static-mappen og refererer til den fra index.html vil det bare virke, uten noen ny route.

Hvis dere skal ha en nettside tilknyttet flask-serveren deres er disse to metodene veldig nyttige.

```python
@app.route('/')
def _home():
    """Serve index.html at the root url"""
    return send_from_directory(static, 'index.html')

@app.route('/<path:path>')
def _static(path):
    """Serve content from the static directory"""
    return send_from_directory(static, path)
```

### GET users

Nedenfor endepunktene for statiske filer, ligger rest-endepunktene.

Øverst har vi metoden som håndtere GET users. Igjen har vi en app.route som sier at det er urlen 'api/users' denne metoden skal håndtere. Vi må også spesifisere hvilke HTTP-metoder som skal gjelde for denne python-metoden med `methods=["GET"]`. På denne måten kan samme url bli håndtert av forskjellige python-metoder, avhengig av hvilken HTTP-metoden som er i requesten.

Hvis vi ikke spesifiserer noen metode vil Flask anta at det skal være GET, det er derfor `_home` og `_static` ikke trenger noe methods argument. `get_users()` må ikke ha det heller, men jeg synes det er bedre for å enklere skille mellom `get_users()` og `create_user()`.

Så returnerer vi listen med brukere, pakket inn et dictionary. I denne versjonen av vi ikke en ordentlig database, bare en liste med python dictionaries. Et python-dictionary har samme form som et JSON-objekt, og derfor vil automatisk konvertere til JSON når vi returnerer et dictionary.

```python
@app.route('/api/users', methods=["GET"])
def get_users():
    return wrap_data(users)
```

### Oppgave: Implementere get_posts som GET til /posts

Din oppgave er å implementere `get_posts` til returnere alle innlegg tilsvarende `get_users`. Legg til et eksempel-innlegg øverst i filen på samme måte som 

### POST users

Metoden `create_user()` er litt mer komplisert. I `app.route` bruker vi samme URL, men har methods=["POST"] istendenfor "GET". Variablen `request` blir automatisk opprettet av Flask, og innholder den innkommende requesten fra nettsiden. Vi henter ut JSON-bodyen fra requesten med `request.get_json()`. Under er det lagt inn en enkel sjekk på den innkommende brukeren før vi lagrer den. Den er ikke like avansert som sjekken på gorest.co.in. Det er helt opp til serveren å definere hva som er "gyldig" input er for noe.

(Kode funfact: Hvis vi hadde gjort content["field"] og "field" ikke er med i content, vil vi få en `KeyError`. Men! I en `if`-setning med `or` trenger bare én av de to være sanne for at hele if-setningen er sann. Derfor, hvis `( field not in content.keys )` er sant, blir  `( content[field] == "" )` aldri kjørt, fordi datamaskinen allerede er fornøyd med at setningen i sin helhet er sann. Derfor får vi ingen `KeyError`.)

På samme måte som før gjør Flask dictionary om til JSON automatisk. Hvis vi setter et komma etter retur-JSON kan vi også sette retur-koden. I `get_users()` satte vi ingen returkode, og derfor ble den til `200 OK` automatisk.

Merk at vi heller ikke sjekker noen token i denne serveren. På samme måte som det er helt opp til serveren hva som er gyldig input, er det helt opp til serveren hva den krever av autentisering.

```python
@app.route('/api/users', methods=["POST"])
def create_user():
    content = request.get_json()

    # Gå gjennom alle feltene vi krever i en user ressurs:
    for field in user_fields:
        # Hvis feltet ikke er med i input, eller det er en tom streng
        if ( field not in content.keys() ) or ( content[field] == "" ):
            # Gi feilmelding i 400-serien, BAD CLIENT INPUT
            return {"message": "missing field: '%s'" % field}, 400

    # Legg til ny bruker i bruker-database
    created_user = add_element(users, content)
    print(content)
    # Returner den ny-opprettede brukeren, med statuskode 201 CREATED
    return wrap_data(created_user), 201
```

### Oppgave: Implementere create_post som POST til /posts

Din oppgave er å implementere `get_posts` til returnere alle innlegg tilsvarende `get_users`. Legg til kun enkel sjekk av inputen.

## Bonus-oppgaver om du er ferdig:

Noen ting du kan legge til i koden om du er ferdig:
* Mer avansert sjekking av input, for eksempel sjekke at `status` enten er `active` eller `inactive`.
* Sjekke at `userId` i innlegget i `create_post` tilhører en bruker som finnes.
* Legge til `get_user()` for en spesifikk bruker med URL `'api/users/<id>'` hvor id er id-en på brukeren man vil ha tilbake. Hint: sjekk `_static(path)` for hvordan man bruker en url-verdi i en metode.
