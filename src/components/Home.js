import React from 'react'
//import photo from '../home photo.png'
import photo2 from '../home3.jpg'

function Home() {
  return (
    <div>
      <div className="card mb-3 bg-warning" >
  <div className="row no-gutters">
    
    <div className="col-md-6">
      <div className="card-body">
        
        <p className="card-text p-4 text-fluit">What is &quot;Topography&quot;?
Typography is the study of both natural and artificial features of a
land or an area. The action of describing or portraying something
precisely.

It is the art of graphic delineation in details usually on maps or on
charts of natural and man-made features of a particular area or place
in a way to show their relative position and elevation.

TFL topographical Test:
TFL is a local government part of Greater London Authority. Most of
the transport mode in London comes under its control.
TFL sets the topographical test for its private Hire driver License. The
test is based on A-Z Greater London Atlas only.

Topographical Assessment Guidelines:
The topographical assessment is a mandatory test to ensure you have the required map reading
skills in order to become a licenced private hire driver. your application will not progress until you
have passed the topographical assessment. you will have two opportunities to pass the
topographical skill assessment. Your assessment could be carried out in paper format or may be</p>

<p className='card-text'>
computer based. If your assessment is computer based, you will need a basic understanding of how
to use a mouse.

Assessment Structure:
The assessment will test all aspects of map reading skills:
• Using indexes to identify points/locations
• Using a map to identify directions and points/locations
• To plan a route between two locations
• To demonstrate knowledge of compass points within directional based questions
Index based questions:
This section will assess your ability on how to use the different indexes within an atlas.
Example Question: Identify the grid reference and page number of Parliament Street, London.
General Topography:
This section will assess your ability on how to use the different maps within an atlas.
Example Question:
What direction is London City Airport from central London?
Planning a route:
This section will assess your ability to plan a route between two locations.
Example Question:
What is the most direct route from London Zoo to Piccadilly Circus?
A short video to provide guidance on how you may be expected to plot a route within the online
assessment can be found at our web page tfl.gov.uk/topographical
Compass point questions:
You may be asked scenario-based questions based on the compass points
</p>

<p className="card-text">

</p>
        
      </div>
    </div>
    <div className="col-md-6">
      <img src={photo2} className="card-img" alt={photo2} />
      <p className="card-text p-4 text-fluit">
      There are a total of 100 marks available and candidates must score 60 or more to pass.
Questions asking you to plot the most direct route from a start point to an end point carry the most
marks. The points available per questions are published within the assessment. You will lose marks
if:
• Not following the most direct route
• Not correctly addressing map symbols (one-way systems, roundabouts)
• Not arriving at the end location
All assessments are subject to a two-step marking procedure. Assessments are marked by a skilled
Topographical Assessor and then put through a quality assurance process where they are checked by
a second assessor before the results are issued.
Please note, we are unable to provide detailed individual feedback or to provide copies of
assessments.
      </p>
    </div>
  </div>
</div>
</div>
  )
}

export default Home