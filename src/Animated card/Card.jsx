import React from 'react'
import '../Styles/styles.css'

export default function Card() {
    return (
        <div className=''>
            <div className="wrapper">
                <div className="container">
                    <input type="radio" name="slide" id="c1" checked />
                    <label for="c1" class="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>Winter</h4>
                                <p>Winter has so much to offer -
                                    creative activities</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c2" />
                    <label for="c2" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4>Digital Technology</h4>
                                <p>Gets better every day -
                                    stay tuned</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c3" />
                    <label for="c3" className="card">
                        <div class="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Globalization</h4>
                                <p>Help people all over the world</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c4" />
                    <label for="c4" class="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h4>New technologies</h4>
                                <p>Space engineering becomes
                                    more and more advanced</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c5" checked />
                    <label for="c5" class="card">
                        <div className="row">
                            <div className="icon">5</div>
                            <div className="description">
                                <h4>Winter</h4>
                                <p>Winter has so much to offer -
                                    creative activities</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

        </div>
    )
}
