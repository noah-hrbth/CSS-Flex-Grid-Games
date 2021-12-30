# Browser Learn Games
## Konzept
In dem Projekt geht es um die Erstellung von 2 Browser-Lerngames zum Thema CSS Flexbox und CSS Grid.
Ziel ist es mithilfe von HTML/CSS/JavaScript, 2 seperate Browsergames zu erstellen, welche von Studenten aus dem ersten Semester genutzt werden können.

Da Flexbox und Grid umfangreiche Themen sind, welche in der WebPro Vorlesung nicht vollständig abgedeckt werden können, wollen wir mit diesem Projekt den Studenten helfen, ihre in der Vorlesung erworbenen Kenntnisse mithilfe eines Games zu vertiefen.

Die Games sind inspiriert von CSS Flexbox Froggy und CSS Grid Garden. 
Hier wollen wir eine eigene Version schaffen, welche den Studenten der HSD zur Verfügung steht.

In beiden Games muss man mithilfe von Flexbox/Grid-Anweisungen die gestellten Aufgaben erreichen.
Beispielsweise, die farbigen Frösche auf die dazu gehörigen farbigen Seerosen bringen.
Hat man dies erreicht kommt man ins nächste Level.
So vertieft man Schritt für Schritt CSS Flexbox bzw. CSS Grid.

Die gesamte Organisation findet hier auf GitLab, über Issues usw., statt.

![Unsere Skizze](https://cdn.discordapp.com/attachments/898937507406839869/903664783226716200/unknown.png)

## Zeitstrahl für Milestones

<img src="https://cdn.discordapp.com/attachments/898937507406839869/910247728641105930/Milestones.png">

## Sequenzdiagramm Input zu Output

<img src="https://cdn.discordapp.com/attachments/898937507406839869/914157736034451506/Sequenzdiagramm_Input_to_Output.png">

## Kontextabgrenzung

Die Browser Learn Games sind 2 interaktive Lernspiele, in welchen HSD Studenten ihre CSS Kenntnisse vertiefen und teilweise neue Anweisungen lernen können. Die Spiele laufen beide über die HSD Server und sind über das Web (per Link auf HSD Website) erreichbar. Das Spiel so wie die Server werden von einem Administrator gewartet.

<img src="https://media.discordapp.net/attachments/898937507406839869/926142288822935582/Verfeinerungsebene0.png">

## Whitebox-/Bausteinsicht  

<img src="https://cdn.discordapp.com/attachments/898937507406839869/926147097579888690/Verfeinerungsebene1.png">


| Name der Komponente   | Beschreibung der Kernfunktion (was tut die Komponente, was nicht) | Beschreibung der Abhängigkeit zu anderen Komponenten (welche andere Komponenten nutzt Sie wofür, von wem wird Sie genutzt und wofür)  |
|    :---:     |    :---:     |    :---:     |
| User Interface | UI bietet zentrale Funktionen für Interaktion des Users mit den Spielen. UI realisert alles womit der User interagiert. UI ist nicht verantwortlich für Dinge die nicht den User selbst betreffen. UI implementiert keinerlei Funktionen für User Datenverwaltung. | Die Komponente Browser verwendet UI, um Dateneingaben vom User empfangen und interpretieren zu können. UI benötigt Komponente Browser um dynamische Werte, wie Spielzüge auf die Useroberfläche anzuzeigen. |
 Browser | Browser bietet zentrale Funktionen für die Implementierung von fachlichen Aspekte und Verhalten. Browser ist außerdem verantwortlich für zentrale Dinge wie Spielstandspeicherung über Cookies usw. Browser ermöglicht das eigentliche Anwenden und Überprüfen der Spiellogik.  Domain ist nicht verantwortlich für die Darstellung. | Die Komponente UI verwendet Browser, um die Daten und Spielzüge dem Spieler anzuzeigen. Browser benötigt Komponente UI um die Spiellogik und den CSS Code ansprechend darzustellen. |
