import React from 'react'

import "./Faqs.css";

const Questions = () => {
    return (
        <body>
            <h3 class="exp__title">FAQs</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <div class="exp__desc">
                            <h1 class="exp__name">Q: Who can become a member?</h1>
                            <p class="exp__body">A: The club is open to anyone, you do not need to be a UF student. However, you do need to be a UF student to participate in the DSC Solution Challenge. </p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <div class="exp__desc">
                            <h1 class="exp__name">Q: How frequently do events and workshops occur? </h1>
                            <p class="exp__body">A: We try to have as many as possible during the semester. Join our Discord to stay updated.  </p>
                        </div>
                    </div>

                    <div class="exp">
                        <div class="exp__desc">
                            <h1 class="exp__name">Q: What should I bring to the workshops? </h1>
                            <p class="exp__body">A: You should bring a notebook, pen, laptop, and most importantly, a curious mind. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <div class="exp__desc">
                            <h1 class="exp__name">Q: Who should I reach out to if I have questions? </h1>
                            <p class="exp__body">Direct message (DM) any of the club officers in the club Discord. </p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Questions;