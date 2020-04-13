import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selectors";

import { DirectoryMenuComtainer } from "./directory.styles";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
    <DirectoryMenuComtainer>
      {
        sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </DirectoryMenuComtainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);