import React from 'react';

import DonorsCSS from '../styles/DonorsCSS.css';

const Donors = () => {
  return (
    <div className='dn-container'>
      <div className='dn-box-container'>
        <div className='dn-box'>
          <div className='dn-inner-box dn-box-1'>
            <div className='circle jordan'></div>
            <h4>The Jordan Guess Level</h4>
            <p>
              Casey Keelen | Jimmy Overholt | Shandi Warnix | Cory Keelen |
              Christopher Wagner | Laurie Shaw | Kim Davis | Ralph Wiseman |
              Katie Lanning | Sara Lee | Kyle Miklk | Eric Brown | Robert Gaines
              | Verna Bible | Petet Traynor | Alicia Shoop | Andy Balogh |
              Brandy Phillips | Elena Nikolaeva | Gakleb Rileyt | John Hanlon |
              Paige Denton | Pam Guidry-Vollers | William Smith | Susan Allen |
              Tricia Thomas | Sovanna Pen | Suzane Goodemote | Eleanor
              Lenarduzzi | Anonymous
            </p>
          </div>
        </div>
        <div className='dn-box bruce-box'>
          <div className='dn-inner-box dn-box-2'>
            <div className='circle bruce'></div>
            <h4>The Bruce Shaw Level</h4>
            <p>
              Maggie Williams | Elizabeth Whitewolf | Joseph Tipton | Emma
              Collins | Gaye Jeffers | Gwen Styers | Janet Bailey | Kathy Akin |
              Kathy Lutes Ebel | Kay Smith | Kaylee Smith | Richard Nichols |
              Linda Posey | Michael Huseman | Robert Hobgood | Roxanna Young |
              CT Turner | Natalie Tracey | Alyssa Whitesell | Jennifer Bryant |
              Cary Garret
            </p>
          </div>
        </div>
        <div className='dn-box dn-box-2 rob-box'>
          <div className='dn-inner-box dn-box-3'>
            <div className='circle robbye'></div>
            <h4>The Robbye Lewis Level</h4>
            <p>
              Eric 'Red' Wyatt | Jake Brown | Bruce Shaw & Bonnie Stoloff |
              Terry Sanford | Marty & Pam Smith | Pete & Myra Fox | Barbara
              Sherrod | Joel Sanchez-Avantes | Leigh Anne Battersby | Michael
              Salter | Robbye Lewis | The Turner Family Legacy | Jordan Otis
            </p>
          </div>
        </div>
        <div className='dn-box dn-box-2 battersby-box'>
          <div className='dn-inner-box'>
            <div className='circle leighanne'></div>
            <h4>The Leigh Anne Battersby Level</h4>
            <p>Judith DeWitt | Vivian & Martin Hershey</p>
          </div>
        </div>
        <div className='dn-box dn-box-2 founders-box f-box'>
          <div className='dn-inner-box'>
            <div className='circle founders'></div>
            <h4>The Founders Level</h4>
            <p>
              John Thomas McCecil | Garry Lee Posey |  Courtenay Cholovich
              Birthday Fundraiser | Kashun Parks | Mark and Pam Bracher | Betsy
              Laskowski
            </p>
          </div>
        </div>
        <div className='dn-box dn-box-2 founders-box buck-box'>
          <div className='dn-inner-box'>
            <div className='circle starbucks'></div>
            <h4>Starbucks Foundation</h4>
          </div>
        </div>
        <div className='dn-box dn-box-2 founders-box un-box'>
          <div className='dn-inner-box'>
            <div className='circle unum'></div>
            <h4>Unum Foundation</h4>
          </div>
        </div>
        <div className='dn-box dn-box-2 founders-box cig-box'>
          <div className='dn-inner-box'>
            <div className='circle cigna'></div>
            <h4>Cigna Foundation</h4>
          </div>
        </div>
        <div className='dn-box dn-box-2 founders-box cig-box'>
          <div className='dn-inner-box'>
            <div className='circle sharp'></div>
            <h4>Humanities Tennessee</h4>
            <p>
              SHARP grant recipient
            </p>
          </div>
        </div>
        <div className='dn-box dn-box-2 founders-box com-box'>
          <div className='dn-inner-box'>
            <div className='circle partners'></div>
            <h4>Community Partners</h4>
            <p>
              Copy Connection | Brainerd Trophy Shop | Hunter Museum of American
              Art | WUTC | Orange Grove Center | CoPac & Barking Legs Theatre |
              Chattanooga State Theatre Department | Chattanooga Autism Center
            </p>
          </div>
        </div>

        <div className='dn-box dn-box-2 founders-box com-box'>
          <div className='dn-inner-box'>
            <div className='circle license'></div>
            <h4>Specialty License Plate Program</h4>
            <p>
              Support the arts in our community by purchasing a specialty license
              plate through the Tennessee Arts Commission. Just <a className="license-a"
              href="https://tnspecialtyplates.org/purchase-a-specialty-plate/"
              target="_blank"
              rel='noopener nofeferrer'
              >follow
              this link</a> to choose from over 100 available plates!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donors;
