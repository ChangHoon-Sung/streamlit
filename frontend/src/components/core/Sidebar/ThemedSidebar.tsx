/**
 * @license
 * Copyright 2018-2022 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react"
import PageLayoutContext from "src/components/core/PageLayoutContext"
import ThemeProvider from "src/components/core/ThemeProvider"
import { createTheme, ThemeConfig } from "src/theme"
import Sidebar, { SidebarProps } from "./Sidebar"

const createSidebarTheme = (theme: ThemeConfig): ThemeConfig =>
  createTheme(
    "Sidebar",
    {
      secondaryBackgroundColor: theme.emotion.colors.bgColor,
      backgroundColor: theme.emotion.colors.secondaryBg,
    },
    theme,
    // inSidebar
    true
  )

const ThemedSidebar = ({
  theme,
  children,
  ...sidebarProps
}: Partial<SidebarProps>): ReactElement => {
  const {
    activeTheme,
    sidebarChevronDownshift: chevronDownshift,
  } = React.useContext(PageLayoutContext)
  const sidebarTheme = createSidebarTheme(activeTheme)

  return (
    <ThemeProvider
      theme={sidebarTheme.emotion}
      baseuiTheme={sidebarTheme.basewebTheme}
    >
      <Sidebar {...sidebarProps} chevronDownshift={chevronDownshift}>
        {children}
      </Sidebar>
    </ThemeProvider>
  )
}

export default ThemedSidebar
