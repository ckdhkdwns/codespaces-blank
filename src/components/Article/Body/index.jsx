import React, { useState, useEffect } from "react"
import styled from "styled-components"

import './style.css'
import useOffsetTop from "hooks/useOffsetTop"

import Toc from "./Toc"
import StyledMarkdown from "./StyledMarkdown"
import BaekjoonLink from "./BaekjoonLink/baekjoonLink"

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 112px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Body = ({ title, html, series }) => {
  const [toc, setToc] = useState([])

  const [ref, offsetTop] = useOffsetTop()

  useEffect(() => {
    console.log(series)

    setToc(
      Array.from(
        document.querySelectorAll("#article-body > h2, #article-body > h3")
      )
    )
  }, [])

  return (
    <Wrapper>
      <Toc items={toc} articleOffset={offsetTop} />
      {series == "Baekjoon"? <BaekjoonLink title={title}/> : <></>

      }
      <StyledMarkdown
        id="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
        itemProp="articleBody"
        ref={ref}
      />
    </Wrapper>
  )
}

export default Body
