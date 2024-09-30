import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root' // Indique à Angular d'enregistrer ce service à la racine de l'application (permet de n'avoir qu'une seule instance de service partagée par tous les partis intéressés)
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
        'Suzie',
        'Notre nouveau petit chat !',
        "https://images.unsplash.com/photo-1503777119540-ce54b422baff?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        new Date(),
        10
      ),
      new FaceSnap(
        'Xena',
        'Notre premier chat !',
        "https://plus.unsplash.com/premium_photo-1695805280897-448bbbd5a9b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        new Date(),
        100
      ).withLocation('à la maison'),
      new FaceSnap(
        'Minette',
        'Le frère de Xena !',
        "https://images.unsplash.com/photo-1616869736815-3362745ab32d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        new Date(),
        200
      )];

      getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps]; // Affiche une copy du tableau FaceSnap[] qui ne pourras pas être modifier et donc n'impactera pas le code ci-dessus
      }

      getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap
      }

      snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId)
        faceSnap.snap(snapType);
    }

}