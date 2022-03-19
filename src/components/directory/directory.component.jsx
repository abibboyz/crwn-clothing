import React from "react";
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import {connect} from 'react-redux';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({sections}) => (            
  <div className="directory-menu">
  {/* {
      this.state.sections.map(({title,imageUrl, id, size, linkUrl}) =>(
          <MenuItem key={id} imageUrl = {imageUrl} title={title} size = {size} linkUrl={linkUrl} />
      ))
  */ //equivalent code
      
        sections.map(({id,...otherSectionProps}) =>(
            <MenuItem key={id} {...otherSectionProps} />
        ))
    }
  </div>
  );

  const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
  });

export default connect(mapStateToProps)(Directory);