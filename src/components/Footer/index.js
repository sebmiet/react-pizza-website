import React from 'react'
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconsLink 
} from './FooterElements'


const Footer = () => {
    return (
      <FooterContainer>
          <FooterWrap>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to="/">Pizza</SocialLogo>
                      <SocialIcons>
                          <SocialIconsLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                          </SocialIconsLink>
                          <SocialIconsLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                          </SocialIconsLink>
                          <SocialIconsLink href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                                <FaYoutube />
                          </SocialIconsLink>
                          <SocialIconsLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter />
                          </SocialIconsLink>
                          <SocialIconsLink href="/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaLinkedin />
                          </SocialIconsLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
    )
}

export default Footer
