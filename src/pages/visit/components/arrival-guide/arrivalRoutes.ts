import churchParking from "../../../../assets/images/directions/highway55/church-parking.png";
import churchEntrance from "../../../../assets/images/directions/highway55/church-entrance.png";
import fireStation from "../../../../assets/images/directions/highway55/fire-station.png"
import highway55Turn from "../../../../assets/images/directions/highway55/highway55-turn.png"

import opposite1 from "../../../../assets/images/directions/opposite/opposite1.jpeg";
import opposite2 from "../../../../assets/images/directions/opposite/opposite2.jpeg";
import opposite3 from "../../../../assets/images/directions/opposite/opposite3.jpeg"
import opposite4 from "../../../../assets/images/directions/opposite/opposite4.jpeg"

export type Step = {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
}

export type Direction = 'highway55' | 'opposite';

export const fromHighway55Steps : Step[] = [
    {
        image: highway55Turn,
        imageAlt: "Intersection near Frank's Pizza and Jenkins Bridge Road.",
        title: 'Turn onto Jenkins Bridge Road.',
        description: "From Highway 55, look for Frank's Pizza on your right. Turn left onto Jenkins Bridge Road.",
    },
    {
        image: fireStation,
        imageAlt: "Fountain Inn Fire Station #2 along Jenkins Bridge Road.",
        title: 'Continue along Jenkins Bridge Road',
        description: "Drive past homes and open fields. You will see Fountain Inn Fire Station #2 on your left. The church entrance will be the next driveway on your right.",
    },
    {
        image: churchEntrance,
        imageAlt: "Driveway entrance leading toward Fellowship Baptist Church.",
        title: 'Turn into the church driveway.',
        description: "Look for the church sign on the right. Turn into the driveway and follow it to the parking area.",
    },
    {
        image: churchParking,
        imageAlt: "Parking area in front of Fellowship Baptist Church.",
        title: 'Arrive and park.',
        description: "Follow the driveway to the parking area in front of the church. The main entrance is at the front of the building.",
    },
]

export const fromOppositeDirectionSteps : Step[] = [
    {
        image: opposite1,
        imageAlt: "Intersection of Highway 418 and Jenkins Bridge Road.",
        title: 'Turn onto Jenkins Bridge Road.',
        description: 'From Highway 418, turn onto Jenkins Bridge Road and continue toward Fellowship Baptist Church.',
    },
    {
        image: opposite2,
        imageAlt: "View along Jenkins Bridge Road approaching the church.",
        title: 'Continue along Jenkins Bridge Road.',
        description: 'Follow Jenkins Bridge Road toward the church, watching for the entrance as you approach the property',
    },
    {
        image: opposite3,
        imageAlt: "Driveway leading from Jenkins Bridge Road toward the church.",
        title: 'Look for the church driveway.',
        description: 'Watch for the driveway leading from Jenkins Bridge Road toward the church building. Turn into the property and continue toward the parking area.',
    },
    {
        image: opposite4,
        imageAlt: "Church building and designated parking area.",
        title: 'Arrive and park.',
        description: 'Follow the driveway to the designated parking area. From there, proceed toward the church entrance.',
    },
]
