import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/myblog.jpg';
import imageSprLessonBuilderDark from 'assets/myblog.jpg';
import imageSprLessonBuilderLightLarge from 'assets/mybloglight.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/mybloglight.png';
import imageSprLessonBuilderLight from 'assets/mybloglight.png';
import pic2 from 'assets/pic2.png';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';


const title = 'Data Analysis App';
const description = 
'Technologies used : Machine Learning, Backend - Django, Frontend - React and Python for gerneration Of graphs. In this data analysis project there will be an open source web platform for data analytics community. The website will allow user to upload data, perform multiple data analysis and cleaning processes on the given data and allow other users to comment for getting to a better conclusion. A summarized report will be generated at the end.  ';
  
const roles = [
  
  'Functionalities:',
  'Login Page',
  'Data Upload (CSV files ) of our Choice ',
  'Univariate Analysis (Histogram, Bargraph and their significance) ',
  'Outlier , Missing Values , Bivariate sections ',
   ' Final Report ',
  

];

export const MyBlog = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];


  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Komall03/ENGAGE-PROJECT--Data-Analysis/tree/master"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [pic2, pic2]
                  : [pic2, pic2]
              }
              placeholder={
                isDark
                  ? pic2
                  : pic2
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Purpose and outcomes of this Project.</ProjectSectionHeading>
              <ProjectSectionText>
                The main purpose of this app is to generate automatic summary using web interface. It uses web interface instead of coding to save users time. It is highly scalable as more number of functionalities can be added in the future.
                The outcome of the  project is a great success! I utilized
                ML,Django and react to create a fast, responsive, and visually
                appealing platform. The app is easy to navigate and provides a
                seamless user experience. With these cutting-edge technologies, I was able
                to build a scalable and flexible app that is ready to grow with my
                needs. I'm really happy with the end result as the app effectively
                showcases my content and connects with my audience. Overall,
                I'm impressed with the outcome of the project and I'm sure that my Data Analysis App
                 will continue to thrive in the future.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
          
};
