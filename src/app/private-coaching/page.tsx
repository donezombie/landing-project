import Button from "@/components/Button";
import HeaderContainer from "@/components/HeaderContainer";
import { genTitle } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: genTitle("Private Coaching"),
};

const PrivateCoachingPage = () => {
  return (
    <div className="page-content">
      <HeaderContainer className="mb-16 mt-8 relative w-full">
        1 TO 1 PRIVATE COACHING
      </HeaderContainer>

      <div className="max-w-[1040px] m-auto p-3 md:p-0">
        <div className="flex gap-8">
          <div className="shrink-0">
            <img
              src="/custom/businesswomen-using-laptop-1.webp"
              className="rounded-2xl"
            />
          </div>
          <div>
            <p>
              <strong>1 TO 1 PRIVATE COACHING</strong>
            </p>
            <p>
              At Fit Diet Pro, we believe that every individual deserves a
              personalized approach to achieving their health and wellness
              goals. Our <strong>1 to 1 Private Coaching</strong> offers the
              perfect blend of expert guidance, customized strategies, and
              unwavering support from a team of experienced coaches dedicated to
              your success.
            </p>
            <p>
              With our collaborative approach, you’ll work directly with one of
              our highly trained coaches, but you’ll also benefit from the
              collective expertise of our entire team. We understand that each
              person has unique needs, which is why we offer customized weight
              loss plans, nutrition advice, and lifestyle strategies that are
              designed to fit your specific goals, challenges, and preferences.
              Whether you’re looking to lose weight, improve your diet, or
              develop healthier habits, our coaches will support you every step
              of the way.
            </p>
            <p>
              As part of our <strong>1 to 1 Private Coaching</strong> program,
              you’ll receive:
            </p>
            <ul>
              <li>
                <strong>Personalized Coaching</strong>: One-on-one sessions
                tailored to your needs and goals, ensuring you stay on track and
                motivated.
              </li>
              <li>
                <strong>Expert Guidance</strong>: Access to a diverse team of
                coaches, each bringing unique perspectives and strategies to
                help you succeed.
              </li>
              <li>
                <strong>Ongoing Support</strong>: Regular check-ins, progress
                tracking, and accountability to keep you focused and moving
                forward.
              </li>
              <li>
                <strong>Customized Diet &amp; Fitness Plans</strong>: Plans that
                are designed to fit your lifestyle, preferences, and health
                needs—no one-size-fits-all solutions here.
              </li>
            </ul>
            <p>
              We understand the journey to better health is personal and
              sometimes challenging. That’s why our team of coaches is committed
              to creating a supportive, non-judgmental space for you to thrive.
              We’re here to empower you with the knowledge and tools to make
              lasting changes, whether it’s losing weight, improving nutrition,
              or achieving overall wellness.
            </p>
            <p>
              Together, we’ll create a plan that works for <em>you</em>, and
              we’ll be with you every step of the way to help you achieve the
              results you’ve always wanted.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="elementor-widget-container mt-14 bg-gray-100 p-10 rounded-2xl">
          <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h4>
                <strong>
                  Working with me on a one-to-one basis you get to understand
                  how to
                </strong>
              </h4>
              <ul>
                <li>
                  Eat better, not less – as you learn how to eat intuitively, in
                  sync with your body’s needs we throw guesswork out of the
                  window
                </li>
                <li>
                  Identify which area of your life is feeding your weight gain
                  cycle – you’d be surprised that this is more than food and
                  exercise
                </li>
                <li>Navigate those 4:00 pm cravings</li>
                <li>
                  Make little tweaks to your lifestyle which will give you
                  massive results
                </li>
                <li>
                  Detoxify your body of all the toxins that are making you hold
                  on to weight
                </li>
                <li>
                  Manage stress – the one thing that triggers fat storage in the
                  body
                </li>
              </ul>
            </div>
          </div>
          <div className="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h4>
                <strong>How this works</strong>
              </h4>
              <ul>
                <li>
                  A&nbsp;<strong>FREE</strong>&nbsp;30 minutes discovery session
                  to understand your health history
                </li>
                <li>
                  A 1-2-1 call every 2 weeks – 50 minutes coaching session
                </li>
                <li>Weekly lifestyle plans</li>
                <li>
                  Guides on nutrition, sleep, mindset, emotional health – as per
                  your requirement
                </li>
                <li>Self-Awareness and reflective worksheets</li>
                <li>
                  Easy to implement everyday tips and tricks that speed up your
                  journey
                </li>
                <li>
                  Create a step-by-step customized plan that works for you in
                  any situation
                </li>
              </ul>
            </div>
          </div>
          <div className="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h4>
                <strong>Timeline</strong>
              </h4>
              <p>
                This is a 3 months minimum commitment experience, which can be
                renewed every 3 months.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <a href="/contact-us">
              <Button>Let's Talk</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateCoachingPage;
