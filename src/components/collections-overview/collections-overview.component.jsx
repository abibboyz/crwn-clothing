import React from 'react';

import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import '../collections-overview/collections-overview.styles.scss';

import CollectionPreview from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({collections}) =>(
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

 export default connect(mapStateToProps)(CollectionsOverview);