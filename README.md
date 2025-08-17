# administrat_app
Developed for small enterprises. Mean to be used for intern Personal documentation.

Projektübersicht:
administrat_app ist eine modulare Desktop-Applikation für ein Sprachinstitut, bestehend aus Frontend (Next.js), Backend (Express.js) und einer Electron-Desktop-Oberfläche. Die Struktur basiert auf einem Monorepo mit npm Workspaces, um effiziente Entwicklung und gemeinsame Verwaltung von Dependencies zu gewährleisten.

Projektstruktur:

administrat_app/

        │── package.json              # Root-Workspace-Konfiguration

        │── README.md                 # Dieses Dokument

        │── .gitignore

        │── node_modules/             # Gemeinsamer node_modules-Ordner (verwaltet durch Workspaces)
        
        │
        │── front-end/                # Next.js Webfrontend
        │   └── package.json
        │
        │── back-end/                 # Express.js Backend API
        │   └── package.json
        │   └── 
        │
        │── electron/                 # Electron Desktop-App
                └── package.json


Änderungen & wichtige Hinweise (Stand: 17.08.2025):

	•	Einführung von npm Workspaces im Root-package.json, um Abhängigkeiten zentral und für alle Teilprojekte zu verwalten.
	•	node_modules wird nur einmal im Root-Verzeichnis installiert, alle Unterprojekte referenzieren diese Installation.
	•	Skripte im Root-package.json ermöglichen paralleles Starten der Frontend-, Backend- und Electron-Komponenten.
    •	NEU: Das Skript start-sequential.sh startet Backend und Frontend zuerst und wartet, bis das Frontend bereit ist, bevor Electron gestartet wird. Dadurch wird ein Timing-Problem beim Starten der Electron-App vermieden.
    •	Manuelle Reihenfolge: Backend und Frontend zuerst starten, dann Electron, sobald das Frontend unter http://localhost:3000 erreichbar ist.
    •	.gitignore angepasst, um sensible und große Dateien wie node_modules/, Build-Artefakte und Umgebungsvariablen auszuschließen.
    •	Sicherheitswarnungen bei Abhängigkeiten (z.B. Electron) regelmäßig prüfen und Updates einspielen.


Installation & Setup

	1.	Repository klonen:

git clone https://github.com/Njordan55/administrat_app.git

cd administrat_app

    2.	Alle Abhängigkeiten zentral installieren:

npm install

	3.	Entwicklung starten:

        •	Frontend:
npm run start:front

    	•	Backend:
npm run start:back

    •	Electron Desktop-App:
npm run start:electron

	4.	Alternativ alle Komponenten parallel starten:

npm run start

Best Practices für die Zusammenarbeit
	•	Neue Dependencies immer im jeweiligen Unterordner (front-end, back-end, electron) hinzufügen.
	•	Nach Änderung der package.json immer im Root-Verzeichnis npm install ausführen.
	•	node_modules wird nicht versioniert (in .gitignore).
	•	Regelmäßig npm audit und npm audit fix laufen lassen, um Sicherheitslücken zu erkennen und zu beheben.


Nützliche Befehle

Befehl                      Zweck

-----------------------------------------------
Install all Depency

* npm install               

        Alle Workspaces und Abhängigkeiten installieren

-----------------------------------------------
Running the Project manualy

* npm run start:front

        Frontend starten

* npm run start:back

        Backend starten

* npm run start:electron

        Electron App starten

------------------------------------------------
Running the Complet project
(Startup timing issue possible)

* npm run start

        Alle drei (front, back, electron) parallel starten

------------------------------------------------
Running the Project whith Automated "SEQUENCIAL"

* bash start.sh

        To run the Backend than the Frontend and first run Electron when thy are ready.
