import React from 'react';
import styles from './Fixtures.module.scss';
import Image from 'next/image';

import Chelsea_FC from '../../assets/Chelsea_FC.png';
import FC_Barcelona from '../../assets/FC_Barcelona.png';

const Fixtures = () => {
  return (
    <div className={styles.fixtures}>
      <div className={styles.fixtures__heading}>
        {/* <h2>Coming Soon</h2> */}
      </div>
      {/* <div className={styles.fixtures_container}>
        <div className={styles.fixturebox}>
          <div className={styles.fixturebox__teams}>
            <div className={styles.fixturebox__hometeam}>
              <Image src={Chelsea_FC}/>
              <p>Chelsea</p>
            </div>
            <div className={styles.fixturebox__scores}>
              <h4>VS</h4>
              <p>9 - 0</p>
            </div>
            <div className={styles.fixturebox__awayteam}>
              <Image src={FC_Barcelona}/>
              <p>Barcelona</p>
            </div>
          </div>
          <div className={styles.fixturebox__scorers}>
            <p>4 Lukaku</p>
            <p>3 Lukaku</p>
            <p>2 Lukaku</p>
            <p>1 Lukaku</p>
          </div>
        </div>
        <div className={styles.fixturebox}>
          <div className={styles.fixturebox__teams}>
            <div className={styles.fixturebox__hometeam}>
              <Image src={Chelsea_FC}/>
              <p>Chelsea</p>
            </div>
            <div className={styles.fixturebox__scores}>
              <h4>VS</h4>
              <p>9 - 0</p>
            </div>
            <div className={styles.fixturebox__awayteam}>
              <Image src={FC_Barcelona}/>
              <p>Barcelona</p>
            </div>
          </div>
          <div className={styles.fixturebox__scorers}>
            <p>4 Lukaku</p>
            <p>3 Lukaku</p>
            <p>2 Lukaku</p>
            <p>1 Lukaku</p>
          </div>
        </div>
        <div className={styles.fixturebox}>
          <div className={styles.fixturebox__teams}>
            <div className={styles.fixturebox__hometeam}>
              <Image src={Chelsea_FC}/>
              <p>Chelsea</p>
            </div>
            <div className={styles.fixturebox__scores}>
              <h4>VS</h4>
              <p>9 - 0</p>
            </div>
            <div className={styles.fixturebox__awayteam}>
              <Image src={FC_Barcelona}/>
              <p>Barcelona</p>
            </div>
          </div>
          <div className={styles.fixturebox__scorers}>
            <p>4 Lukaku</p>
            <p>3 Lukaku</p>
            <p>2 Lukaku</p>
            <p>1 Lukaku</p>
          </div>
        </div>
        <div className={styles.fixturebox}>
          <div className={styles.fixturebox__teams}>
            <div className={styles.fixturebox__hometeam}>
              <Image src={Chelsea_FC}/>
              <p>Chelsea</p>
            </div>
            <div className={styles.fixturebox__scores}>
              <h4>VS</h4>
              <p>9 - 0</p>
            </div>
            <div className={styles.fixturebox__awayteam}>
              <Image src={FC_Barcelona}/>
              <p>Barcelona</p>
            </div>
          </div>
          <div className={styles.fixturebox__scorers}>
            <p>4 Lukaku</p>
            <p>3 Lukaku</p>
            <p>2 Lukaku</p>
            <p>1 Lukaku</p>
          </div>
        </div>
        <div className={styles.fixturebox}>
          <div className={styles.fixturebox__teams}>
            <div className={styles.fixturebox__hometeam}>
              <Image src={Chelsea_FC}/>
              <p>Chelsea</p>
            </div>
            <div className={styles.fixturebox__scores}>
              <h4>VS</h4>
              <p>9 - 0</p>
            </div>
            <div className={styles.fixturebox__awayteam}>
              <Image src={FC_Barcelona}/>
              <p>Barcelona</p>
            </div>
          </div>
          <div className={styles.fixturebox__scorers}>
            <p>4 Lukaku</p>
            <p>3 Lukaku</p>
            <p>2 Lukaku</p>
            <p>1 Lukaku</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Fixtures;
