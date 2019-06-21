let deltaHeures = 0
let deltaMinutes = 0

let heures = 0
let minutes = 0
let secondes = 0


enum fuseaux {
    //% block="Heure de Londres"
    londres,
    //% block="Heure de Terre-Neuve"
    terreNeuve,
    //% block="Heure du Labrador"
    labrador,
    //% block="Heure de l'Atlantique"
    atlantique,
    //% block="Heure de l'Est"
    est,
    //% block="Heure du Centre"
    centre,
    //% block="Heure des Rocheuses"
    rocheuses,
    //% block="Heure du Pacifique"
    pacifique
}

//% block="Horloges ECV" weight=100 color=#105EA6 icon="\uf017"
namespace custom {

    //% block="Régler le fuseau horaire à $i"
    export function fuseau(i: fuseaux): void {
        let fuseauxHeures = [8]
        fuseauxHeures = [0, -3, -4, -4, -5, -6, -7, -8]
        let fuseauxMinutes = [8]
        fuseauxMinutes = [0, -30, 0, 0, 0, 0, 0, 0]

        deltaHeures = fuseauxHeures[i]
        deltaMinutes = fuseauxMinutes[i]
        //basic.showNumber(deltaHeures)
    }

    //% block="Sauvegarder heure avec $m et $v"
    export function sauvegarderHeure(m: string, v: number): void {
        switch (m) {
            case "Heure":
                heures = v
                break
            case "Minutes":
                minutes = v
                break
            case "Secondes":
                secondes = v
                break
            default:
        }
    }

    //% block="Heures corrigées"
    export function heureCorrigee(): number {
        let h = (heures + deltaHeures) % 24
        let m = minutes + deltaMinutes
        if (m < 0) h -= 1
        else if (m > 59) h += 1
        return h
    }

    //% block="Minutes corrigées"
    export function minutesCorrigees(): number {
        let m = (minutes + deltaMinutes) % 60
        return m
    }

    //% block="Heure complète"
    export function heureComplete(): string {
        let h = ""
        if (heureCorrigee() < 10) h = "0" + heureCorrigee()
        else h = "" + heureCorrigee()

        let m = ""
        if (minutesCorrigees() < 10) m = "0" + minutesCorrigees()
        else m = "" + minutesCorrigees()

        return h + ":" + m
    }
}
