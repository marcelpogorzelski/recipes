<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Description</key>
        <string>Uses parent pkg recipe to download latest Mendeley and import it into the JSS.</string>
        <key>Identifier</key>
        <string>com.github.marcelpogorzelski.jss.Mendeley</string>
        <key>Input</key>
        <dict>
            <key>NAME</key>
            <string>Mendeley</string>
            <key>CATEGORY</key>
            <string>Web Browsers and Internet Utilities</string>
            <key>POLICY_CATEGORY</key>
            <string>Testing</string>
            <key>POLICY_TEMPLATE</key>
            <string>%RECIPE_DIR%/PolicyTemplate.xml</string>
            <key>ICON</key>
            <string>%RECIPE_DIR%/Mendeley.png</string>
            <key>GROUP_TEMPLATE</key>
            <string>%RECIPE_DIR%/SmartGroupTemplate.xml</string>
            <key>GROUP_NAME</key>
            <string>%NAME%-update-smart</string>
            <key>DESCRIPTION</key>
            <string>Mendeley is a free reference manager and academic social network that can help you organize your research, collaborate with others online, and discover the latest research. - http://www.mendeley.com</string>
        </dict>
        <key>MinimumVersion</key>
        <string>0.4.0</string>
        <key>ParentRecipe</key>
        <string>com.github.hansen-m.pkg.Mendeley</string>
        <key>Process</key>
        <array>
            <dict>
                <key>Arguments</key>
                <dict>
                    <key>prod_name</key>
                    <string>%NAME%</string>
                    <key>category</key>
                    <string>%CATEGORY%</string>
                    <key>policy_category</key>
                    <string>%POLICY_CATEGORY%</string>
                    <key>policy_template</key>
                    <string>%POLICY_TEMPLATE%</string>
                    <key>self_service_icon</key>
                    <string>%ICON%</string>
                    <key>self_service_description</key>
                    <string>%DESCRIPTION%</string>
                    <key>groups</key>
                    <array>
                        <dict>
                            <key>name</key>
                            <string>%GROUP_NAME%</string>
                            <key>smart</key>
                            <true/>
                            <key>template_path</key>
                            <string>%GROUP_TEMPLATE%</string>
                        </dict>
                    </array>
                </dict>
                <key>Processor</key>
                <string>JSSImporter</string>
            </dict>
        </array>
    </dict>
</plist>
