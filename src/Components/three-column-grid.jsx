import React from 'react';
import '../App.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { githubLinks } from "../github-links"
function ThreeColumnGrid() {
  return (
    <>

<div className="github-links"> 
<h2>Github Resources</h2>
      <ul className="cards">
    {githubLinks.map(link => 
         <Card className="material-card">
         <CardContent>
           <Typography className=""color="textSecondary" gutterBottom>

           <a rel="noopener noreferrer"  target="_blank" href={link.link}>{link.name}</a> 
           </Typography>
           <Typography className="description" variant="body2" component="p">
           {link.description}
           </Typography>
         </CardContent>
       </Card>
      )}
      </ul>
</div>
    
    </>
  );
}

export default ThreeColumnGrid;
