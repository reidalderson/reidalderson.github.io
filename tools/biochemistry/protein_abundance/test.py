copy_number = 2e7                			# protein molecules per cell
NA = 6.022e23                      			# Avogadro's number
volume = 4e-12					   			# Volume of a U2OS cell (L)
concentration = (copy_number/NA)/volume		# protein concentration (M)

print('%.0f nM' % (1e9*concentration))      # protein concentration (nM)
