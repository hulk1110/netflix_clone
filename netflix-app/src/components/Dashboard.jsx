import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Paper,
  Grid,
  TextField,
  Avatar,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
} from "@mui/material";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme, useMediaQuery } from "@mui/material";

const drawerWidth = 240;

const chartData = [
  { date: "4/1", value: 12 },
  { date: "4/2", value: 18 },
  { date: "4/3", value: 9 },
  { date: "4/4", value: 15 },
  { date: "4/5", value: 11 },
  { date: "4/6", value: 17 },
  { date: "4/7", value: 20 },
];

export default function DashboardPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar>
        <Typography variant="h6" noWrap>
          LCF
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ bgcolor: "#fff", color: "#000", height: "100%" }}>
        {[
          { text: "Dashboard", icon: <DashboardIcon /> },
          { text: "Submissions", icon: <ListAltIcon /> },
          { text: "Funded Deals", icon: <AttachMoneyIcon /> },
          { text: "Agents", icon: <PeopleIcon /> },
          { text: "Reports", icon: <BarChartIcon /> },
        ].map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: "#000" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Responsive Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar"
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#0B3C5D",
              color: "#fff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f5f5",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <AppBar
          position="static"
          sx={{
            bgcolor: "#fff",
            color: "#000",
            boxShadow: 1,
            mb: 2,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <TextField size="small" placeholder="Search..." />
              <Avatar sx={{ bgcolor: "primary.main" }}>E</Avatar>
            </Box>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, height: 250 }}>
              <Typography variant="subtitle1" mb={2}>
                Rolling 30 Day Open Deals Funnel
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* KPI Cards */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                TOTAL OPEN OPPORTUNITIES
              </Typography>
              <Typography variant="h6" color="green">
                $2,789,008.00
              </Typography>
            </Paper>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                OPEN APPROVALS
              </Typography>
              <Typography variant="h6" color="primary">
                198
              </Typography>
            </Paper>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                POTENTIAL COMMISSIONS TOTAL
              </Typography>
              <Typography variant="h6" color="purple">
                $223,121
              </Typography>
            </Paper>
          </Grid>

          {/* Alerts Table */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" color="error" gutterBottom>
                Alerts
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Agent</TableCell>
                      <TableCell>Submission Name</TableCell>
                      <TableCell>Alert</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Cathy King</TableCell>
                      <TableCell>Web Shopping</TableCell>
                      <TableCell>Missing a Document</TableCell>
                      <TableCell>4/11/2025</TableCell>
                      <TableCell>
                        <Button variant="text" size="small">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Contract Table */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Contract In/Out
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Business Name</TableCell>
                      <TableCell>Deal Type</TableCell>
                      <TableCell>Stage</TableCell>
                      <TableCell>Created Date</TableCell>
                      <TableCell>ISO Agent</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Popular News</TableCell>
                      <TableCell>Renewal</TableCell>
                      <TableCell>Contract In</TableCell>
                      <TableCell>4/11/2025</TableCell>
                      <TableCell>John Smith</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
