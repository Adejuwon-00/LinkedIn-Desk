import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )


    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Adejuwon is on TopDev!!", 'Top news - 9999 readers')}
            {newsArticle("Coronavirus: Nigeria Updates", 'Top news - 759 readers')}
            {newsArticle("Tesal hits new highs", 'Cars & auto - 9999 readers')}
            {newsArticle("Bitcoin breaks $60k", 'Crypto - 8000 readers')}
            {newsArticle("Is Redux too good?", 'Code - 270 readers')}
            {newsArticle("How Buhari ruined the economy", 'Top news - 1500 readers')}
        </div>
    )
}

export default Widgets
