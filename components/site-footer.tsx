import SocialMediaIcons from "./SocialMediaIcons"
import BackTop from "./back-to-top"

type Props = {}

function SiteFooter({}: Props) {
  return (
    <div className="container h-[400px] bg-[#1f1f1f] px-8 py-12 text-white">
      <div className="mb-2 w-full text-white">
        <div className="mb-2 border-b-[2px]"></div>
        <p className="mb-[5px] text-xs font-semibold">CLong</p>
        <p className="text-xs font-light">©2023 - CLong.pro </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm">{`Phone: +1 (604)818 2149`}</p>
          <p className="text-sm">
            Created By <span className="font-semibold">Hugo Lam</span>
          </p>

          <SocialMediaIcons />
          {/* <div className="flex h-9 space-x-5">
            <SocialMediaIcon
              media={siteConfig.socialMedia.twitter}
              SIcon={Icons.twitter}
            />
            <SocialMediaIcon
              media={siteConfig.socialMedia.github}
              SIcon={Icons.gitHub}
            />
          </div> */}
        </div>

        <BackTop />
      </div>
    </div>
  )
}

export default SiteFooter
