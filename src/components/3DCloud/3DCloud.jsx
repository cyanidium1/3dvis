// import './3DCloud.css'

const tags = [
    '3D Modeling',
    'Virtual Reality',
    'Interior Design',
    'Exterior Design',
    'Architectural Visualization',
    'Virtual Tour',
    'Interactive Design',
    'Furniture Design',
    'Immersive Experience',
    'Room Design',
    'Landscape Design',
    'Urban Planning',
    'Virtual Showroom',
    '360-Degree Visualization',
    'Architectural Design',
    'Lighting Design',
    'Texture Mapping',
    'VR Simulation',
    'Design Thinking',
    'Floor Plan Design',
    'Experiential Design',
    'Design Visualization',
    'Spatial Planning',
    'Product Visualization',
    'Digital Prototyping',
    'Architectural Modeling',
    'Room Layout',
    'Virtual Design',
    'Conceptual Design',
    'Property Visualization',
    'VR Presentation',
    'Digital Sculpting',
    'Design Concept',
];



export default function Cloud() {
    return (
        <div className="tagcloud-wrapper">

            <ul className="tagcloud" style={{ '--num-elements': tags.length }}>

                {
                    tags.map((el, index) => {
                        return <li key={index} className="tagcloud-tag" style={{ '--index': index + 1 }}> {el} </li>
                    })
                }

            </ul>

        </div>
    )
}