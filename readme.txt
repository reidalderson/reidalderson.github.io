global level in home/xyz (xyz={about, research, publications, ...})
local modifications in other folders

--------------------------------------------------------------------

to make new page:

(1) make folder in /website/content/xyz
(2) add _index.md in /website/content/xyz
(3) make xyz.md in website/content/home
	-- weight controls the order (higher number = later appearance)
(4) edit website/config/_default/menus.toml
	[[main]]
          name = "Tools"
          url = "#tools"
          weight = 50  